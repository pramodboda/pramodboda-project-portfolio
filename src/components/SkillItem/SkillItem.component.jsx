import React from 'react';
import Grid from '@material-ui//core/Grid';

import {SkillItemContainer, ProgressBarRoot, ProgressBar, PercentageTxt, SkillTitle} from './SkillItem.styles';



const SkillItem = (props) => {
    return(<SkillItemContainer >
        <Grid container>
        
        <Grid item sm={6} xs={12}><SkillTitle>{props.title.toUpperCase()}</SkillTitle></Grid>
        <Grid item sm={6} xs={12}><PercentageTxt>{props.percentage}</PercentageTxt></Grid>
        
        
        <ProgressBarRoot>
            <ProgressBar percentage={props.percentage}/>
        </ProgressBarRoot>
       
        </Grid>
         </SkillItemContainer>
    )
}

export default SkillItem;