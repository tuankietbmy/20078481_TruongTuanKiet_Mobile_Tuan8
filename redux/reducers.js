const initialState = {
  currentScreen: 'Screen01',
  name: '',
  tasks: [
    { id: '1', name: 'To check mail' },
    { id: '2', name: 'UI Task web' },
    { id: '3', name: 'Learn javascript basic' },
    { id: '4', name: 'Learn HTML advance' },
    { id: '5', name: 'Medical app UII' },
    { id: '6', name: 'Learn java' },
  ], // Danh sách nhiệm vụ mặc định
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return { ...state, currentScreen: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'ADD_TASK': // Thêm case để thêm nhiệm vụ
      return { ...state, tasks: [...state.tasks, { id: Date.now().toString(), name: action.payload }] }; // Tạo ID mới dựa trên thời gian
    default:
      return state;
  }
};

export default rootReducer;
