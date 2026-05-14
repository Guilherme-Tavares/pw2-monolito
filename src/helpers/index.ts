import { dateFormat } from './date.helper';
import { currencyFormat } from './currency.helper'; // <- novo helper
import { type Application } from 'express';
import {
  type ValidationErrorsViewModel,
  validationErrorsHelper,
} from 'nest-validation-view';

type ViewHelpers = {
  dateFormat: typeof dateFormat;
  currencyFormat: typeof currencyFormat;
  validationErrors: (
    errors: ValidationErrorsViewModel | null | undefined,
  ) => ValidationErrorsViewModel;
};

export const registerHelpers = (app: Application): void => {
  const helpers: ViewHelpers = {
    dateFormat,
    currencyFormat,
    validationErrors: validationErrorsHelper,
  };

  Object.assign(app.locals, helpers);
};