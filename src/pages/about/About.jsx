import "./About.css"

const About = () => {
  return (
    <div className="about">
      <div className="aboutWrapper">
      <h2>About Recipe-Selector</h2>
      <p>Recipe-Selector is an interactive web application designed to help users discover new recipes for every meal type.
        Built with React and leveraging the Edamam Recipe Search API, this app offers a simple, user-friendly interface to search for and explore recipes based on ingredients, meal type, and more.
        Whether you're planning a simple dinner or a festive gathering, Recipe Explorer makes finding the right recipes easy and fun.
      </p>
      <h2>How to Use</h2>
      <ol>
        <li><b>Start Searching</b>: Simply enter an ingredient or dish name in the search bar on the home page.</li>
        <li><b>Select Meal Type</b>: Choose a meal type (e.g., Breakfast, Lunch, Dinner) to filter recipes that fit your meal planning.</li>
        <li><b>Explore Recipes</b>: Browse through the list of recipes that appear based on your search criteria.</li>
        <li><b>Get Details</b>: Click on any recipe card to view detailed information, including ingredients, nutritional facts, and cooking instructions.<br></br>
                                Notice you need to login to check ingredient details.
        </li>
      </ol>
      </div>
    </div>
    
  )
}

export default About