import {Color} from "@angular-material-components/color-picker";

export interface NewCategoryForm {
  name: string,
  color_code: string | Color,
}
