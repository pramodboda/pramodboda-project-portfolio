import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {GenenralSkillsSection, SecTitle, SkillItemSpacing} from './GeneralSkills.styles';
import SkillItem from '../SkillItem/SkillItem.component';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: 0
    }
}))

const GenenralSkills = () =>{
    const classes = useStyles();

    return (
        <GenenralSkillsSection>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12}>
                    <SecTitle>General Skills</SecTitle>
                </Grid>
                
                    <Grid item xs={12} sm={6}>
                    <SkillItemSpacing>
                        <SkillItem percentage="80%" title="HTML"></SkillItem>
                        <SkillItem percentage="85%" title="CSS"></SkillItem>
                        <SkillItem percentage="75%" title="JavaScript"></SkillItem>
                        </SkillItemSpacing>
                    </Grid>
                
                
                    <Grid item xs={12} sm={6}>
                    <SkillItemSpacing>
                        <SkillItem percentage="70%" title="ES6"></SkillItem>
                        <SkillItem percentage="60%" title="React"></SkillItem>
                        <SkillItem percentage="70%" title="Git"></SkillItem>
                        </SkillItemSpacing>
                    </Grid>
                
            </Grid>
        </GenenralSkillsSection>
    )
} 
export default GenenralSkills;