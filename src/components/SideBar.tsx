import { useEffect, useState } from "react";
import { api } from "../services/api"
import { Button } from "./Button";

import './styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps {
  selectGenreById: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ selectGenreById, selectedGenreId }: SidebarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
  
  
  useEffect(() => {
    console.log("oi");
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => selectGenreById(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </div>
  )
}