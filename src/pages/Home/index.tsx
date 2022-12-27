import { ProfileCard } from "./components/ProfileCard/index"
import { SearchPosts } from "./components/SearchPosts/index" 
import { HomeContainer, HomePostsContent,PostCard } from "./styles"
export function Home(){
    return (
        <HomeContainer>        
            <ProfileCard/>
            <SearchPosts/>
            <HomePostsContent>
                <PostCard>
                    <header>
                        <p>JavaScript data types and data structures</p>
                        <span>Há 1 dia</span>
                    </header>
                    <div> 
                        Programming languages all have built-in dat  
                        a structures, but these often differ from on
                        e language to another. This article attempts to
                        list the built-in data structures available in 
                        JavaScript and what properties they have. These c
                        an be used to build other data structures. Wherever
                        possible, comparisons with other languages are drawn.
                      
                    </div>
                </PostCard>
                <PostCard>
                    <header>
                        <p>JavaScript data types and data structures</p>
                        <span>Há 1 dia</span>
                    </header>
                    <div> 
                        Programming languages all have built-in dat  
                        a structures, but these often differ from on
                        e language to another. This article attempts to
                        list the built-in data structures available in 
                        JavaScript and what properties they have. These c
                        an be used to build other data structures. Wherever
                        possible, comparisons with other languages are drawn.
                      
                    </div>
                </PostCard>
                <PostCard>
                    <header>
                        <p>JavaScript data types and data structures</p>
                        <span>Há 1 dia</span>
                    </header>
                    <div> 
                        Programming languages all have built-in data  
                        structures, but these often differ from on
                        e language to another. This article attempts to
                        list the built-in data structures available in 
                        JavaScript and what properties they have. These c
                        an be used to build other data structures. Wherever
                        possible, comparisons with other languages are drawn.
                      
                    </div>
                </PostCard>
            </HomePostsContent>
        </HomeContainer>
    )
}