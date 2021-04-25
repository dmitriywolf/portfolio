import React from 'react';
import './work-filter.css';


const WorkFilter = () => {
  return (

      <div className="filters">
        <form>
          <fieldset>
            <legend>Type</legend>
            <input type="checkbox" id="allType" name="allType" checked/>
              <label htmlFor="allTypes">All</label><br/>

              <input type="checkbox" id="landing" name="landing"/>
                <label htmlFor="landing">Landing</label><br/>

                <input type="checkbox" id="spa" name="spa"/>
                  <label htmlFor="spa">SPA</label><br/>

          </fieldset>

          <fieldset>
            <legend>Technology</legend>

            <input type="checkbox" id="allType" name="allType" checked/>
            <label htmlFor="allTypes">PSD to HTML</label><br/>

            <input type="checkbox" id="landing" name="landing"/>
            <label htmlFor="landing">Sass(SCSS)</label><br/>

            <input type="checkbox" id="spa" name="spa"/>
            <label htmlFor="spa">Bootstrap 4</label><br/>

            <input type="checkbox" id="spa" name="spa"/>
            <label htmlFor="spa">jQuery</label><br/>

            <input type="checkbox" id="spa" name="spa"/>
            <label htmlFor="spa">Gulp</label><br/>

            <input type="checkbox" id="spa" name="spa"/>
            <label htmlFor="spa">Babel.js / Webpack</label><br/>

            <input type="checkbox" id="spa" name="spa"/>
            <label htmlFor="spa">React</label><br/>

          </fieldset>

        </form>
      </div>
)
};


export default WorkFilter;
