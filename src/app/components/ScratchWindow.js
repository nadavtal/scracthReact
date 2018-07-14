var React = require('react');

//CSS requires
require('../css/scratchWindow.css');



function getAllScratches(profiles) {
    // console.log('getAllScratches', profiles)
    var group = []
    for(var i = 0; i<profiles.length; i++){
        for (var j=0; j<profiles[i].scratches.length; j++){
            group.push(profiles[i].scratches[j])
        }
    }
    // console.log('all scratches', group)
    return group
}

function scratchPercentage(scratch, scratchList){
    // console.log('scratchPercentage', scratchList)
    // console.log(scratch.id)
    var length = scratchList.length
    var scratchAcurrences = scratchList.filter((id) => id == scratch.id).length;
    
    // console.log(scratchAcurrences)
    var scratchPerc = (scratchAcurrences/length*100).toFixed(2)
    return scratchPerc
}

function genderProfiles(gender, profiles){
    var group = profiles.filter((profile) => profile.gender == gender)
        // console.log(group)
        return group;
}

function findProfilesByScratch(profileList, scratchId){
    // console.log(profileList, scratchId)
    var group = []
    for (var i = 0; i<profileList.length; i++){
        for(var j = 0; j<profileList[i].scratches.length; j++){
            // console.log(profiles[i].scratches[j].id)
            // console.log(scratch.id)
            if (profileList[i].scratches[j] == scratchId){
                group.push(profileList[i])
            }
        }
    }
    // console.log('profileswithscratch', group);
    return group;
}



    const ScratchWindow = (props) => {
        let scratch = props.scratch;
        let scratches = props.scratches;
        let profiles = props.profiles;
        let comments = props.comments;
        let allScratches = getAllScratches(profiles);
        let scratchPerc = scratchPercentage(scratch, allScratches);
        let males = genderProfiles('male', profiles);
        let allMaleScratches = getAllScratches(males)
        let maleScratchPercent = scratchPercentage(scratch, allMaleScratches);
        // console.log('males', maleScratchPercent)
        let females = genderProfiles('female', profiles);
        let allFemaleScratches = getAllScratches(females)
        let femaleScratchPercent = scratchPercentage(scratch, allFemaleScratches);
        let profilesWithScratch = findProfilesByScratch(profiles, scratch.id)
        let malesWithScratch = genderProfiles('male', profilesWithScratch)
        let femalesWithScratch = genderProfiles('female', profilesWithScratch)

        
        return (
           <div className="container scratchWindow">
                <div className="scratchText">
                    <h1 className="scratchHeaderMain">{scratch.header} </h1>
                    <h2 className="scratchDescMain">{scratch.desc} </h2>
                </div>
                <div className="row">
                    <div className="col-sm-4 button ">
                        <button onClick="">i like that <br/>{scratch.likes}</button>
                    </div>
                    <div className="col-sm-4 button">
                        <button onClick="">add to profile <br/>{scratch.addedToProfile}</button>
                    </div>
                    <div className="col-sm-4 button">
                      <button onClick="">deal breaker {scratch.dislikes}</button>
                    </div>
                </div>
                <div className="row statRow">
                    <div className="col-2 stat">
                      <span><strong> { scratchPerc } </strong>%<br/> of all scratches</span><br/>
                    </div>
                    <div className="col-2 stat">
                         <span><strong> { maleScratchPercent }% </strong><br/> of all male scratches</span><br/>
                    </div>
                    <div className="col-2 stat">
                        <span><strong> { femaleScratchPercent }% </strong><br/> of all female scratches</span><br/>
                    </div>
                    <div className="col-2 stat">
                       <span><strong> { profilesWithScratch.length } </strong><br/> poeple have this scratch</span><br/>
                    </div>
                    <div className="col-2 stat">
                        <span><strong> { malesWithScratch.length } </strong><br/> males have this scratch</span><br/>
                    </div>
                    <div className="col-2 stat">
                        <span><strong> { femalesWithScratch.length } </strong><br/> females have this scratch</span><br/>
                    </div>
                 
                </div>
                
            </div>
                    );
    }
        


export default ScratchWindow


