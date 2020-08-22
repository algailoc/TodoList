import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TodoList} from './TodoList';
import {readTodo} from '../store/Action';

export const AppLoader = ({styles}) => {
  const isReady = useSelector((state) => state.todo.ready);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(readTodo());
  //   }, 5000);
  // }, [dispatch]);

  useEffect(() => {
    dispatch(readTodo());
  }, [dispatch]);

  if (!isReady) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#5CA88B" />
      </View>
    );
  } else {
    return <TodoList styles={styles} />;
  }
};
