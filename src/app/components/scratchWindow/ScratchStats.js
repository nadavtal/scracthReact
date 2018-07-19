import React from 'react'



const ScratchStats = (props) => {
    var stats = props.stats
    return (
        <div>
        <h5>stats</h5>
        <div className="row statRow">
            <div className="col-2 stat">
                <span><strong> { stats.scratchPerc } </strong>%<br/> of all scratches</span><br/>
            </div>
            <div className="col-2 stat">
                    <span><strong> { stats.maleScratchPercent }% </strong><br/> of all male scratches</span><br/>
            </div>
            <div className="col-2 stat">
                <span><strong> { stats.femaleScratchPercent }% </strong><br/> of all female scratches</span><br/>
            </div>
            <div className="col-2 stat">
                <span><strong> { stats.profilesWithScratch.length } </strong><br/> poeple have this scratch</span><br/>
            </div>
            <div className="col-2 stat">
                <span><strong> { stats.malesWithScratch.length } </strong><br/> males have this scratch</span><br/>
            </div>
            <div className="col-2 stat">
                <span><strong> { stats.femalesWithScratch.length } </strong><br/> females have this scratch</span><br/>
            </div>
        </div>
        </div>
    )
}


export default ScratchStats
