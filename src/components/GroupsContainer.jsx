const GroupsContainer = (props) =>{

    return(

        <>
        
        <div id="groupsContainer" className='container2'>
            <label htmlFor=""> Group Values <br />
              <textarea name="" id="" 
              placeholder='Enter Groups Values' 
              cols="30" 
              rows="30"
              value={props.groups.groupValues.join("\n")}
              onChange={props.handleGrpValueChange}
              />
            </label>


{
  props.groups.groupNames.map((grpName, index)=>{
    return(
                  <div 
                  className="grp-details-container" 
                  index={index}
                  key={`"groupDetailContainer-"${index}`}
                  >
                    <label htmlFor=""> Group Label <br />
                        <input type="text"
                        placeholder='Enter Group Label'
                        value={grpName.groupLabel}
                        onChange={(e) => props.handleGrpLabelChange(e, index)}
                        />
                      </label>
                      <br />

                      <label htmlFor=""> Group Name <br />
                        <input type="text"
                        placeholder='Enter Group Name'
                        value={grpName.groupName}
                        onChange={(e) => props.handleGrpNameChange(e, index)}
                        />
                      </label>
                      <br />

                      <button type="button"
                        onClick={() => props.handleRemoveGroup(index)}
                        >Remove Group</button>
                  </div>
    )
  })
}
            
          </div>
        
        </>
    )

}

export default GroupsContainer;