import { createContext } from 'react';

import type { Excursion } from '../types/event';

export const ExcursionsContext = createContext<Excursion[] | null>(null);
