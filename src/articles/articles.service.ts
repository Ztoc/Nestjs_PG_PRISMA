import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma:PrismaService){}
  create(createArticleDto: CreateArticleDto) {
    const {body,title,description,published} = createArticleDto;
    return this.prisma.article.create({data:{body,title,description,published}})
  }

  findAll() {
    return this.prisma.article.findMany({where:{published:true}})
  }
  findDrafts(){
    return this.prisma.article.findMany({where:{published:false}})

  }

  findOne(id: number) {
    return this.prisma.article.findUnique({where:{id}})
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
