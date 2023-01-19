---
layout: interior
title: Pre-Class Form
---

<form id="sp-form" action="https://getform.io/f/5b6a3696-e405-43ee-a72e-e391bd0f83a1"  method="POST" enctype="multipart/form-data">
  <p>Welcome to Senior Design Project! I’m glad you could join us. Please take some time to answer the following questions as honestly as possible.</p>
  <p>This questionnaire will NOT be graded. Its intent is to let us get to know you better as a student (and human being), as well as to give us a clearer sense of your expectations for this course.</p>
  <p>All the questions are required.</p>
    <h3>Admin</h3>
    <fieldset>
      <label for="teacher">Who is your Senior Project teacher?</label>
      <input type="text" name="teacher" required>
    </fieldset>
    <h3>About You</h3>
    <fieldset>
      <label for="full-name">Your Full Name</label>
      <input type="text" name="full-name" required>
    </fieldset>
    <fieldset>
      <label for="preferred-name">Your Preferred Name</label>
      <input type="text" name="preferred-name" required>
    </fieldset>
    <fieldset>
      <label for="pronuciation">Phonetic Pronunciation of Your Name</label>
      <input type="text" name="pronunciation" required>
    </fieldset>
    <fieldset>
      <label for="pronouns">Your Pronouns</label>
      <input type="text" name="pronouns" required>
    </fieldset>
    <fieldset>
      <label for="major">What is your major/concentration?</label>
      <input type="text" name="major" required>
    </fieldset>
    <fieldset>
      <label for="minor">Do you have a minor? If you do, what is it?</label>
      <input type="text" name="minor" required>
    </fieldset>
    <fieldset>
      <label for="describe">Use five adjectives to describe yourself.</label>
      <textarea type="textarea" name="describe" required></textarea>
    </fieldset>
    <h3>More about you</h3>
    <fieldset>
      <label for="define">How do you define graphic design?</label>
      <textarea type="textarea" name="define" required></textarea>
    </fieldset>
    <fieldset>
      <label for="strengths">What are some of your biggest strengths as a designer?</label>
      <textarea type="textarea" name="strengths" required></textarea>
    </fieldset>
    <fieldset>
      <label for="weaknesses">What are some of your biggest weaknesses as a designer?</label>
      <textarea type="textarea" name="weaknesses" required></textarea>
    </fieldset>
    <fieldset>
      <label for="failure">List a failure that has taught you something unexpected.</label>
      <textarea type="textarea" name="failure" required></textarea>
    </fieldset>     
    <h3>Things you're interested in</h3>
    <p>If you have more than one answer for any of these feel free to include multiple.</p>
    <fieldset>
      <label for="book">Name a book you love.</label>
      <input type="text" name="book" required>
    </fieldset>
    <fieldset>
      <label for="movie">Name a movie or TV show you love.</label>
      <input type="text" name="movie" required>
    </fieldset>
    <fieldset>
      <label for="music">Name a musician or podcast you love.</label>
      <input type="text" name="music" required>
    </fieldset>
    <fieldset>
      <label for="social-issue">Name a social issue you feel passionate about.</label>
      <input type="text" name="social-issue" required>
    </fieldset>  
    <h3>For the Class</h3>
    <fieldset>
      <label for="project-ideas">List at least 1 of your ideas (content and/or form) for your senior project?</label>
      <textarea type="textarea" name="accomplish" required></textarea>
    </fieldset>
    <fieldset>
      <label for="relate">How do these ideas relate to your education as a graphic designer?</label>
      <textarea type="textarea" name="relate" required></textarea>
    </fieldset>
    <h3>Confidence Levels</h3>
    <p>Click on the bar closest to the statement that best describes your abilities within the scale.</p>
    <fieldset>
      <div class="slidecontainer">
        <label for="gd-skills">How confident do you feel about your skills in graphic design?</label>
        <input type="range" min="1" max="100" value="1" class="slider" data-clicked="false" id="gd-skills" name="gd-skills" required>
        <ul class="range-labels">
          <li class="label-left">not confident</li>
          <li class="label-center">somewhat confident</li>
          <li class="label-right">extremely confident</li>
        </ul>
      </div>
    </fieldset>
      <fieldset>
      <div class="slidecontainer">
        <label for="gd-understanding">How confident do you feel about your understanding of graphic design?</label>
        <input type="range" min="1" max="100" value="1" class="slider" data-clicked="false" id="gd-understanding" name="gd-understanding" required>
        <ul class="range-labels">
          <li class="label-left">not confident</li>
          <li class="label-center">somewhat confident</li>
          <li class="label-right">extremely confident</li>
        </ul>
      </div>
    </fieldset>
    <fieldset>
      <div class="slidecontainer">
        <label for="public-speaking">How confident do you feel about your public speaking skills?</label>
        <input type="range" min="1" max="100" value="1" class="slider" data-clicked="false" id="public-speaking" name="public-speaking" required>
        <ul class="range-labels">
          <li class="label-left">not confident</li>
          <li class="label-center">somewhat confident</li>
          <li class="label-right">extremely confident</li>
        </ul>
      </div>
    </fieldset>
    <fieldset>
      <div class="slidecontainer">
        <label for="critique">How confident do you feel about your critique  skills?</label>
        <input type="range" min="1" max="100" value="1" class="slider" data-clicked="false" id="critique" name="critique" required>
        <ul class="range-labels">
          <li class="label-left">not confident</li>
          <li class="label-center">somewhat confident</li>
          <li class="label-right">extremely confident</li>
        </ul>
      </div>
    </fieldset>
    <h3>The Future</h3>
    <fieldset>
      <label for="two-years">What would you like to accomplish 2 years from now?</label>
      <textarea type="textarea" name="two-years" required></textarea>
    </fieldset>
    <fieldset>
      <label for="five-years">What would you like to accomplish 5 years from now?</label>
      <textarea type="textarea" name="five-years" required></textarea>
    </fieldset>
    <fieldset>
      <label for="live">Where would you like to live (city/village/town/country) after graduation?</label>
      <input type="text" name="live" required>
    </fieldset>
    <fieldset>
      <label for="dream-job">What would be your dream job? Be as specific as you want.</label>
      <textarea type="textarea" name="dream-job" required></textarea>
    </fieldset>
  <button id="sub-but" type="submit">Submit</button>
  <p id="warning" class="w-hidden">Please select a value for each slider.</p>
</form>
