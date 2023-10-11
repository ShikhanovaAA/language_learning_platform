import { Body, Controller, Get, Post, UseGuards, Request, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DictionaryService } from './dictionary.service';
import { DictionaryWord } from './dictionary.model';
import { JwtAuthGuard } from '../utils/guards/jwt-auth.guard';
import { NewWord } from './dto/add-word.dto';

@ApiTags('Dictionary')
@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @ApiOperation({summary: 'Add word to the user dictionary'})
  @ApiResponse({status: 200, type: DictionaryWord})
  @UseGuards(JwtAuthGuard)
  @Post()
  addWordToDictionary(@Body() word: NewWord, @Request() request: any) {
    const userId = request.user.id;

    return this.dictionaryService.addWordToDictionary(word, userId);
  }

  @ApiOperation({summary: 'Get all words from user dictionary'})
  @ApiResponse({status: 200, type: [DictionaryWord]})
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(@Request() request: any) {
    const userId = request.user.id;

    return this.dictionaryService.getUserDictionaryWords(userId);
  }

  @ApiOperation({summary: 'Delete word from user dictionary'})
  @ApiResponse({status: 200})
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteWord(wordId: number) {
    return this.dictionaryService.getUserDictionaryWords(wordId);
  }

  @ApiOperation({summary: 'Translate word'})
  @ApiResponse({status: 200})
  @Get('/:word')
  translateWord(@Param('word') word: string) {
    return this.dictionaryService.translateWord(word);
  }
}
