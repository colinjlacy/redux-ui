import { iNavItem } from './nav-item.model';

export interface iUiState {
    activeNavItem: iNavItem;
    navIsOpen: boolean;
    modalIsOpen: boolean;
    modalData: iNavItem;
}
