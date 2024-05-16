/* eslint-disable @typescript-eslint/no-unused-vars */
import {render} from '@testing-library/react'
import React, {ReactNode } from "react";
import { I18nextProvider } from 'react-i18next';

import * as i18n from './i18n';

export function renderWithTranslation(component: ReactNode ){
    return render(
      <I18nextProvider i18n={i18n.default}>
        {component}
      </I18nextProvider>
   );
}