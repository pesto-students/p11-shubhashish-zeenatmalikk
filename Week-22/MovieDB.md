1. Create a new database named "MovieDB" in MongoDB.
   -->use MovieDB

2. Create three collections named "movies," "directors," and "actors."
   --> db.createCollection("movies")
   --> db.createCollection("directors")
   --> db.createCollection("actors")

3. Design the appropriate schema for each collection and insert sample data into each collection.
4. The "movies" collection should include at least 10 movie documents with relevant details (e.g., title, release year, genre, director, and actors).
5. The "directors" collection should include at least 5 director documents with relevant details (e.g., name, nationality, and movies directed).
6. The "actors" collection should include at least 8 actor documents with relevant details (e.g., name, nationality, and movies acted in).
   --> Attached the json document in Week-22 folder

7. Implement appropriate relationships between the collections. For example, each movie should have a reference to its director and a list of actor references. Each director should have a list of movie references they directed. Each actor should have a list of movie references they acted in.

8. Write MongoDB queries to perform the following tasks:

   1. Find all movies released in a specific year.
      -->db.movies.find({ "release_year": 2010 })

   2. Find all movies in a specific genre.
      -->db.movies.find({ "genre": "Sci-Fi" })

   3. Find all movies directed by a specific director.
      -->db.movies.find({ "director.name": "Christopher Nolan" })

   4. Find all movies that a specific actor acted in
      -->db.movies.find({ "actors.name": "Leonardo DiCaprio" })

   5. Find all directors from a specific nationality
      -->db.movies.find({"director.nationality":"Canadian"})

   6. Find all actors from a specific nationality.
      -->db.actors.find({"nationality":"American"})
