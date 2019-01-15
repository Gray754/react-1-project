import React, {Component} from 'react';

class Students extends Component{
    constructor(){
        super();
        this.state={
            index: 0,
            students:[
                {
                  name:"Kevin",
                  from:"San Antonio",
                  funFact:"Has lived in Argentina",
                  cityOrCountry:"Country",
                  indoorsOrOutdoors:"Indoors",
                  travel: "Travel everyday",
                  food: "Top's",
                  dogOrCat:"Dog"
                },
                {
                  name: "Sabrina",
                  from: "NYC",
                  funFact: "Born in Bangladesh",
                  cityorCountry: "City",
                  indoorsOrOutdoors: "Indoors",
                  topsOrSubway: "Subway",
                  catsOrDogs: "Cats - can't have dogs",
                },
                {
                  name: "Samuel",
                  from: "Nigeria",
                  funFact: "He has been away from home since 10 boarding school",
                  cityOrCountry: "City",
                  indoorsOrOutdoors: " Indoors",
                  travel:"Everyday",
                  topsOrSubway: null,
                  dogOrCat:"Cat"
                }, 
                {
                  name:"Yousef",
                  from:"West Africa",
                  funfact:"born in a village",
                  cityOrCountry:"Lots of money in the city, otherwise country",
                  indoorsOrOutdoors:"Outside but not working",
                  travel: "yes",
                  food: "subway",
                  dogOrCat:"Cat"
                },
                {
                  name: "Uriel",
                  from: "Dallas, TX",
                  funFact: "Plays Soccer",
                  cityOrCountry: "Inbetween, rural",
                  indoorsOrOutdoors: "Outdoors",
                  travel: "Yes",
                  food: "Subway",
                  dogOrCat: null
                },
                {
                  name: "Jon",
                  from: "Washington State",
                  funFact: "Can count in Finnish (lived in Finland)",
                  cityOrCountry: "The midlands",
                  indoorsOrOutdoors: "indoors",
                  travel: "travel",
                  food: null,
                  dogOrCat: "cat"
                },
                {
                  name: 'Harry',
                  from: 'Denton',
                  funFact: 'Degree in music education',
                  cityOrCountry: 'Country but not too far from the city',
                  indoorsOrOutdoors: 'Outdoors for sure, yes definitely outdoors',
                  travel: 'Yes, for sure',
                  food: 'Tops sounds cool, subway is lame',
                  dogOrCat: '2 dogs'
                },
                {
                  name: "Blake",
                  from: "Springdale Arkansas",
                  funFact: "Blackbelt",
                  cityOrCountry: "Country",
                  indoorsOutdoors: "outdoors",
                  travelOrHome: "home",
                  topsOrSubway: "tops",
                  dogOrCat: "dog"
                },
                {
                  name: "Alec",
                  from: "Plano, TX",
                  funFact: "He is a musician",
                  cityOrCountry: "both",
                  indoorsOrOutdoors: null,
                  travel: "never leave home",
                  food: "subway",
                  pet: "dog"
                },
                {
                  name : "Candace",
                  from: "North Dallas",
                  funFact: "She can weld",
                  cityOrCountry: "Country",
                  indoorsOrOutdoors : "Outdoors",
                  travelOrStayHome: "travel every day",
                  topsOrSubway: "subway",
                  dogOrCat: "werewolf cat"
                },
                {
                  name: "Zaid",
                  from: "New Jersey",
                  funFact: "Plans to get engaged soon",
                  cityOrCountry: "City for now, country to retire",     
                  indoorsOrOutdoors: "Both, depends on mood",
                  travel: "new country everday",
                  dogOrCat: "unfortunately, none at the moment" 
                },
                {
                  name: 'Dylan',
                  from: 'Round Rock',
                  funFact: 'Has been in drumline for 4 years',
                  cityOrCountry: 'Country',
                  indoorsOrOutdoors: 'Indoors',
                  travel: 'travel',
                  food: 'subway',
                  dogOrCat: 'both'
                  },
                {
                  name: "Caleb",
                  from:"Wisconsin",
                  funFact: "Has been to Asia",
                  cityOrCountry:"City",
                  indoorsOrOutdoors:"Indoors",
                  travels:"yes",
                  food:"subway",
                  dogOrCat:"Neghter"
                },
                {
                  name: "Sandra",
                  from: "San Diego, CA",
                  funFacts: "Moved to 5 Difference Countries",
                  cityorCountry: "Both, depending on the weather",
                  indoorsOrOutdoors: null,
                  travel: "yes",
                  food: "Subway",
                  dogOrCat: "Dog"
                }
            ]
        }
    };

    nextSlide=()=>{
        if(this.state.index == this.state.students.length-1){
            let next = this.state.index+1;
            this.setState({index:0});
        }
        else{
            let next = this.state.index+1;
            this.setState({index:next})
        }
    }


    prevSlide=()=>{
        if(this.state.index === 0){
            this.setState({index:this.state.students.length-1})
        }else{
            let prev = this.state.index-1;
            this.setState({index:prev})
        }
    }

    deleteClick=()=>{
        let newArr = this.state.students;
        let arrSplice = newArr.splice(0, 1);
        this.setState({students:newArr})
    }


    render(){
        let {students,index} = this.state;
        return(
            <div>
                <div className="studentContainer">
                    <div className="studentInfo">
                        <p className="studentCount">{index+1}/{students.length}</p>
                        <h2 className="studentName">{students[index].name}</h2>
                        <p><span className='bold'>From:</span> {students[index].from}</p>
                        <p className="facts"><span className="bold">Fun Fact:</span> {students[index].funFact}</p>
                        <h3 className="questionTitle">Would you rather...</h3>
                        <ul className="questions">
                            <li><span className="bold">...live in the country or city?</span> {students[index].cityOrCountry}</li>
                            <li><span className="bold">...be indoors or outdoors?</span> {students[index].indoorsOrOutdoors}</li>
                            <li><span className="bold">...travel every day or never leave home?</span> {students[index].travel}</li>
                            <li><span className="bold">...eat at Top's or Subway?</span> {students[index].food}</li>
                            <li><span className="bold">...have a dog or cat? </span>{students[index].dogOrCat}</li>
                        </ul>
                    </div>
                    <div className="slideShowButtons">
                        <p onClick={this.prevSlide}>{'<'}Previous</p>
                        <div className="editButtons">
                            <button>Edit</button>
                            <button onClick={this.deleteClick}>Delete</button>
                            <button>New</button>
                        </div>
                        <p onClick={this.nextSlide}>Next{'>'}</p>
                    </div>
                    
                </div>
            </div>
        )
    }

};

export default Students;