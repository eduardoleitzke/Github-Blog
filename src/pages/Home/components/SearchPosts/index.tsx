import { SearchForm } from "./styles";

export function SearchPosts(){
    return (
       < SearchForm>
        <div>
            <p>Publicações</p>
            <span>6 Publicões</span>
        </div>
            <input placeholder="Buscar conteúdo" type="text" />
       </SearchForm>
    )
}