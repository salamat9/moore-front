import React from 'react';
import { ReactComponent as MySvgIcon } from '../../assets/icons/x-icon.svg';
import './rightModal.scss';

const RightModal = ({ manager, isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='modal-content__header'>{manager ? 'Изменить' : 'Добавить' } менеджера</div>
        <span className="close-button" onClick={onClose}>
          <MySvgIcon />
        </span>
        {children}
      </div>
    </div>
  );
};

export default RightModal;