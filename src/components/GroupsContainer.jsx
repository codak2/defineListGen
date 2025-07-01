const GroupsContainer = (props) =>{

    return(

        <>
        
        <div id="groupvalContainer" className='container2'>
            <label htmlFor=""> Group Values <br />
              <textarea name="" id="" 
              placeholder='Enter Groups Values' 
              cols="30" 
              rows="30"
              value={props.groups.groupValues.join("\n")}
            //   onChange={(e) => props.handleStyleVarValueChange(e, props.index)}
              />
            </label>


{
  props.groups.groupNames.map((grpName, index)=>{
    return(
                  <div>
                    <label htmlFor=""> Group Label <br />
                        <input type="text" 
                        key={`${grpName.groupLabel}-${index}`}
                        index={index}
                        placeholder='Enter Group Label'
                        value={grpName.groupLabel}
                        />
                      </label>
                      <br />

                      <label htmlFor=""> Group Name <br />
                        <input type="text" 
                        key={`${grpName.groupName}-${index}`}
                        index={index+1}
                        placeholder='Enter Group Name'
                        value={grpName.groupName}
                        />
                      </label>
                  </div>
    )
  })
}


        


            {/* 
            
           

            <button type="button"
            onClick={() => props.handleRemoveStylevar(props.index)}
            >Remove Stylevar</button>
            

 <label htmlFor=""> Group Label <br />
                        <input type="text" 
                        key={`${grpName.groupLabel}-${index}`}
                        index={index}
                        placeholder='Enter Group Label'
                        value={grpName.groupLabel}
                        // onChange={(e) => props.handleStyleVarChange(e, props.index)}
                        />
                      </label>

                      <label htmlFor=""> Group Name <br />
                        <input type="text" 
                        key={`${grpName.groupName}-${index}`}
                        index={index}
                        placeholder='Enter Group Name'
                        value={grpName.groupName}
                        // onChange={(e) => props.handleStyleVarChange(e, props.index)}
                        />
                      </label>
                    
            
            
            
            */}
            
          </div>
        
        </>
    )

}

export default GroupsContainer;