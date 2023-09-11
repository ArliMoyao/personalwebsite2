import React from 'react';
import './App.css';
  








function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                       
                    </div>
                    <li><a href="#courses">Introduction</a></li>
                    <li><a href="#tutorials">Work</a></li>
                    <li><a href="#jobs">Courses</a></li>
                 
                </ul>
  
                
            </nav>


            <section class="section"> </section>
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big title paddingTop">
                            Hi, my name is Arli 
                        </h1>

                        <div class="w3-xlarge w3-section">
					<div class="span-text">
						<a href="mailto:am118@wellesley.edu" class="icon">
							<i class="fa fa-envelope w3-hover-opacity"></i>
						</a>
						
					
						
						<a href="https://www.linkedin.com/in/am118/" class="icon">
							<i class="fa fa-linkedin w3-hover-opacity"></i>
						</a>
						<a href="https://www.github.com/ArliMoyao/" class="icon">
							<i class="fa fa-github w3-hover-opacity"></i>
						</a>
						
					</div>
				</div>

                        <h3 class="text-median heading">
                          Computer Science @ Wellesley College'25
                        </h3>
                        <p class="text-small">

                            I am a rising junior majoring in Computer Science and minoring in Economics at
                            Wellesley College. I am always finding ways to expand my technical skills and connect them to real-world issues.
                            I am driven to learn more about the intersection of technology and social justice.   
                           
                        </p>

                        <p class="text-small paddingChange">

                            I believe the best way to do so is by working on projects that make an impact on society. Through 
                            advancing my technical skills, I can make meaningful contributions to large-scale projects. As equally important, 
                            my liberal arts education will teach me how to approach software engineering in a meaningful, inclusive way.
                                
                            
                        </p>



                    </div>
                </div>
            </section>

            <section class="section paddingBottom"></section>

        
            <section class="section paddingBottom"></section>


            <section class="section paddingBottom"></section>

            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Projects
                        </h1>
                        <p class="text-small">
                            Here are some of the projects I have been working on. These projects have ranged from work I have done within 
                            the classroom, during my free time and during my internships/research programs. 
                        </p>

                        

                    </div>
                </div>
            </section>

            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big paddingChange" id="courses-section" >
                            Courses
                        </h1>
                        <p class="text-small ">
                           I have taken many courses at Wellesley, and other universities that have strengthned my technical and non-technical abilities. Here are some of 
                           those courses.
                           <ul class="paddingChange paddingBottom"> 


                            <li> 

                                CS111: Introduction to Computer Programming
                            </li>

                            <li> 

                            CS230: Data Structures
                            </li>

                            <li> 

                            CS204: Introduction to Web Development 
                            </li>

                            <li> 

                            CS240: Foundations to Computer Systems 
                            </li>

                            <li> 

                            CS220: Human-Computer Interaction
                            </li>

                            <li> 

                            CS231: Algorithms
                            </li>


                        
                           
                            
                           </ul>
                          

                        </p>
                    </div>
                </div>
            </section>
           
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>

                
            
                








            </footer>
        </div>
    )
}
  
export default App