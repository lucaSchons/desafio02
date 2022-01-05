import { useState } from 'react';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function selectGenreById(id: number) {
    setSelectedGenreId(id);
  }

  return(
     <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId}  selectGenreById={selectGenreById} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
  
}