import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();
  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };
  return (
    <div className={styles.appHeader}>
      <Button
        variant="primary"
        onClick={() => setModalOpen(true)}
        // onKeyUp={() => setModalOpen(true)}
      >
        Add Task
      </Button>
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">ALL</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Completed">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
