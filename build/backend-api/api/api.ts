export * from './category.service';
import { CategoryService } from './category.service';
export * from './empleo.service';
import { EmpleoService } from './empleo.service';
export * from './skill.service';
import { SkillService } from './skill.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [CategoryService, EmpleoService, SkillService, UserService];
