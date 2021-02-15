import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {GenenralSkillsSection, SecTitle} from './GeneralSkills.styles';
import SkillItem from '../SkillItem/SkillItem.component';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}))

const GenenralSkills = () =>{
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <GenenralSkillsSection>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <SecTitle>General Skills</SecTitle>
                </Grid>
                <Grid item xs={12} sm={6}>
                <SkillItem percentage="80%" title="HTML"></SkillItem>
                <SkillItem percentage="85%" title="CSS"></SkillItem>
                <SkillItem percentage="75%" title="JavaScript"></SkillItem>
                </Grid>

                <Grid item xs={12} sm={6}>
                                    
                <SkillItem percentage="70%" title="ES6"></SkillItem>
                <SkillItem percentage="60%" title="React"></SkillItem>
                <SkillItem percentage="70%" title="Git"></SkillItem>
                </Grid>
            </Grid>
        </GenenralSkillsSection>
    </div>
    )
} 
export default GenenralSkills;