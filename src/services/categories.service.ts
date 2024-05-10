import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
    },
    {
      id: 2,
      name: 'Category 2',
    },
    {
      id: 3,
      name: 'Category 3',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((category) => category.id === id);
    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return category;
  }

  create(payload: any) {
    const newCategory = {
      id: this.categories.length + 1,
      ...payload,
    };

    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: any) {
    const index = this.categories.findIndex((category) => category.id === id);

    this.categories[index] = {
      ...this.categories[index],
      ...payload,
    };

    return this.categories[index];
  }

  remove(id: number) {
    const index = this.categories.findIndex((category) => category.id === id);

    if (index === -1) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    this.categories.splice(index, 1);

    return {
      message: `Category with id ${id} deleted`,
    };
  }
}
