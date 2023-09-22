import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DictionaryWord } from './dictionary.model';
import { NewWord } from './dto/add-word.dto';
import { HttpService } from '@nestjs/axios';
import { getGoogleTranslateUrl, getWordExample } from '../utils/translate';
import { Translation } from './interfaces/translation.interface';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectModel(DictionaryWord) private dictionaryRepository: typeof DictionaryWord,
    private readonly httpService: HttpService,
  ) {}

  async addWordToDictionary(dto: NewWord, userId: number): Promise<DictionaryWord> {
    const word = dto.word.trim();
    let { translation } = await this.translateWord(word);
    let example = await this.getExampleOfUsingWord(word);

    example = typeof example === 'string' ? example : '';
    translation = typeof translation === 'string' ? translation : '';

    const newWord = await this.dictionaryRepository.create({
      word,
      userId,
      translation,
      example
    });

    return newWord;
  }

  async getUserDictionaryWords(userId: number): Promise<DictionaryWord[]> {
    const words = await this.dictionaryRepository.findAll({
      where: {
        userId
      }
    });

    return words;
  }

  async deleteWord(wordId: number): Promise<DictionaryWord['id']> {
    const rows = await this.dictionaryRepository.destroy({
      where: {
        id: wordId
      }
    });

    return wordId;
  }

  async translateWord(word: string): Promise<Translation> {
    try {
      const res = await this.httpService.axiosRef.get(getGoogleTranslateUrl(word));
      const translation = res.data[0][0][0];

      return {translation};
    } catch (error) {
      return error;
    }
  }

  async getExampleOfUsingWord(word: string): Promise<string> {
    try {
      const wordExampleUrl = getWordExample(word.trim());
      const response = await this.httpService.axiosRef.get(wordExampleUrl.url, { headers: wordExampleUrl.headers });
      if (!response.data.examples) return '';

      return response.data.examples[0];
    } catch (error) {
      return error;
    }
  }
}
