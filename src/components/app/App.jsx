import {Container} from "react-bootstrap";
import {AppInfo} from "../app-info/AppInfo.jsx";
import {MovieList} from "../movie-list/MovieList.jsx";
import {MovieAddForm} from "../movie-add-form/MovieAddForm.jsx";
import {AppFilter} from "../app-filter/AppFilter.jsx";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export const App = () => {
    // useState
    const [data, setData] = useState([
        {name: "Life is this, I like this.", viewers: 900, favourite: false, liked: false, id: uuidv4()},
        {name: "The Social Network", viewers: 1900, favourite: false, liked: false, id: uuidv4()},
        {name: "Biography of Steve Jobs", viewers: 500, favourite: false, liked: false, id: uuidv4()},
        {name: "About Andrew Tate", viewers: 900, favourite: false, liked: false, id: uuidv4()},
        {name: "The Rush", viewers: 900, favourite: false, liked: false, id: uuidv4()},
        {name: "Beautiful Mind", viewers: 900, favourite: false, liked: false, id: uuidv4()},
    ])
    const [term, setTerm] = useState("")
    const [filter, setFilter] = useState("all")
    // Deleting item
    const onDelete = (id) => setData((data) => data.filter(x => x.id !== id))

    // Updating item
    const onUpdate = (id, item) => {
        console.log("onUpdate id ", id, "item ", item)
    }

    // Creating item
    const onCreate = (item) => setData(data => ([...data, item]))

    // onSearchHandling item
    const onSearchHandler = (term, arr) => {
        if (term.length === 0) {
            return arr
        }
        return arr.filter(x => x.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }
    const onSearch = (term) => setTerm(term)
    // onFiltering item
    const onFilter = (filter) => setFilter(filter)

    const onFilterHandler = (arr, filter) => {
        switch (filter) {
            case "favourite":
                return arr.filter(x => x.favourite)
            case "liked":
                return arr.filter(x => x.liked)
            case "mostViewed":
                return arr.filter(x => x.viewers > 500)
            default:
                return arr
        }
    }

    // favourite item
    const onFavouriteItem = (id) => {
        setData((data) => data.map((item) => {
                if (item.id === id) {
                    return {...item, favourite: !item.favourite}
                }
                return item
            })
        )
    }

    // like item
    const onLikeItem = (id) => {
        setData((data) => data.map((item) => {
                if (item.id === id) {
                    return {...item, liked: !item.liked}
                }
                return item
            })
        )
    }

    // information about data
    const allMoviesLength = data.length,
        favouriteMoviesLength = data.filter(x => x.favourite).length,
        likedMoviesLength = data.filter(x => x.liked).length,
        mostViewedMoviesLength = data.filter(x => x.viewers > 500).length;

    return (
        <div className="app font-monospace">
            <Container>
                <AppInfo
                    allMoviesLength={allMoviesLength}
                    favouriteMoviesLength={favouriteMoviesLength}
                    likedMoviesLength={likedMoviesLength}
                    mostViewedMoviesLength={mostViewedMoviesLength}
                />
                <AppFilter
                    onSearch={onSearch}
                    onFilter={onFilter}
                    filter={filter}
                />
                <MovieList
                    data={onFilterHandler(onSearchHandler(term, data), filter)}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    onFavouriteItem={onFavouriteItem}
                    onLikeItem={onLikeItem}
                />
                <MovieAddForm
                    onCreate={onCreate}
                />
            </Container>
        </div>
    )
}