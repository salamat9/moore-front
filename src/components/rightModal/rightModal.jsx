import React from 'react';
import { ReactComponent as MySvgIcon } from '../../assets/icons/x-icon.svg';
import './rightModal.scss';

const RightModal = ({ apartment, manager, isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='modal-content__header'>{manager || apartment ? 'Изменить' : 'Добавить' } {manager ? 'менеджера' : 'квартиру'}</div>
        <span className="close-button" onClick={onClose}>
          <MySvgIcon />
        </span>
        {children}
      </div>
    </div>
  );
};

export default RightModal;