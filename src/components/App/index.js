import { QueryClient, QueryClientProvider } from 'react-query';

import RootRouter from 'routes/Root';

import './style.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootRouter />
    </QueryClientProvider>
  );
}

export default App;
