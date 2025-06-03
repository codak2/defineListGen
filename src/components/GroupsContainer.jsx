const GroupsContainer = (props) =>{

    return(

        <>
        
        <div id="groupvalContainer" className='container2'>
            <label htmlFor=""> Group Values <br />
              <textarea name="" id="" 
              placeholder='Enter Groups Values' 
              cols="30" 
              rows="40"
              value={props.grpValList}
            //   onChange={(e) => props.handleStyleVarValueChange(e, props.index)}
              />
            </label>

            {/* <label htmlFor=""> Stylevar Name <br />
              <input type="text" 
              placeholder='Enter Stylevar Name'
              value={props.SVName}
              onChange={(e) => props.handleStyleVarChange(e, props.index)}
              />
            </label>

            <button type="button"
            onClick={() => props.handleRemoveStylevar(props.index)}
            >Remove Stylevar</button> */}
            
          </div>
        
        </>
    )

}

export default GroupsContainer;