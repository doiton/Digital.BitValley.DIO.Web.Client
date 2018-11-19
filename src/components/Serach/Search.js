import React, {Component} from 'react';
import './Search.css';


class Search extends Component{
    render(){
        return(
         
  
                <div class="input-group stylish-input-group">
                    <input type="text" class="form-control"  placeholder="Search" />
                    <span class="input-group-addon">
                     <input type="submit" name="asda"/>
                    </span>
                </div>

     

        );
    }
}


export default Search;