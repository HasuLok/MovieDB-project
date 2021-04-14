document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    let adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm .querySelector('.adding__input'),
        checkbox = addForm .querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });    
    
    let newFilm = addInput.value;
    let favorite = checkbox.check;   

    movieDB.movies.push(newFilm);
    console.log(newFilm);
    
    let sortArr = (arr) =>{
        arr.sort();
    };
    
    let deleteAdv = () => {
        adv.forEach(item => {
            item.remove();
        });
        
    };
    
    let makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };  
      
    function createMovieList (films, parent) {
        parent.innerHTML = '';
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                 <div class="delete"></div>
            </li>  
            `;
        });
    } 

    deleteAdv();
    makeChanges();
    createMovieList(movieDB.movies, movieList );
    sortArr(movieDB.movies);



});