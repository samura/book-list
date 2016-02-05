
## Objectives
- responsive and atractive design
- clear separation of VC
- creation of a filter (same filter applies to list and show, on "Similar Readings")
- reusable templates (book-small.html and info.html)
- use of ui-router
- implement bootstrap with a little CSS


## Out of scope
Since the job description does not require backend, i'll only focus on the angularjs, loading the entire json on controller load.
I decided to use frontend pagination to be easier to find similar readings.


## Requirements
- npm


## Instalation
This show be enought to get everything installed and server running. If you get permissions errors, please run `sudo npm start` instead.
```bash
git clone https://github.com/samura/book-list.git
cd book-list
npm start
``` 
Now you just have to visit http://localhost:8000


## Discover Section Challenge

Create a SPA, that displays the books available in the `books.json` file in this Gist.
An example wireframe is also attached to this Gist, but please feel free to deviate and be as creative as you like.


### Requirements

This is a small 2 page SPA, consisting of an index page (list of books) and a show page (detailed view of each book).

* The books index page should be:

    - Filterable (by category and genre)
    - Searchable (by title and author)
    - Pageable (either frontend or backend pagination is fine for this)

* The books index page should show the following data for each book:

    - Cover image
    - Title
    - Author
    - Votes
    - Published date (bonus points for relative time)

* When a book is clicked it then displays the books show page.

* The books show page should display the same data visible from the index page with the addition of:

    - Author avatar
    - Introductory contents
    - 3 recommended books (from a similar genre and category)

* Your implementation should be provided as a public Github repository, with instructions on how to run the code locally.

### What we'll be looking at

* The structure, modularity and overall quality of any code and markup.
* The suitability of the chosen technologies
* Documentation
* Creativity
