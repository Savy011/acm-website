import React, { useState } from 'react';
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/pages/register.module.scss";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Link from "next/link";
import { Button } from '@mui/material';

function register() {

    // TODO: Refactor branch name array
    const branchNames = [
        "CSE",
        "ECE",
        "EE",
        "MECH",
        "CIVIL",
        "CSEDS",
        "PROD"
    ]
    const [branch, setBranch] = useState(branchNames.length === 0 ? "" : branchNames[0]);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleBranchChange = (event: SelectChangeEvent) => {
        setBranch(event.target.value);
    }

    const handlePasswordChange = (event : SelectChangeEvent) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event : SelectChangeEvent) => {
        setConfirmPassword(event.target.value); 
    }

    return (
        <PageLayout title="Register | ACM at PEC">

            <form className={styles.parent}>

                <div className={styles.intro}>
                    <h1>Create Your PEC-ACM ID</h1>
                    <div className={styles.introLine}>
                        One ACM ID is all you need.
                    </div>
                    <div className={styles.introLine}>
                        Already have an ACM ID?
                        <Link href="/login" className={styles.link}> Log in Here {">"}</Link>
                    </div>
                </div>

                <div className={styles.sectionWrapper}>

                    <div className={styles.flowSection}>
                        <div className={styles.name}>
                            <div className={styles.fName}>
                                <TextField label="First Name" variant="filled" />
                            </div>
                            <div className={styles.lName}>
                                <TextField label="Last Name" variant="filled" />
                            </div>
                        </div>

                        <div className={styles.userDetails}>
                            <FormControl variant="filled" size="small" fullWidth>
                                <InputLabel>Branch</InputLabel>
                                <Select
                                    onChange={handleBranchChange}
                                    value={branch}
                                    sx={{ height: "4em" }}
                                >
                                    {
                                        branchNames.map((branchName, id) => <MenuItem value={branchName} key={id}>{branchName}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>

                            <div>
                                <TextField label="SID" variant="filled" fullWidth />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles.sectionWrapper}>

                    <div className={styles.flowSection}>
                        <div className={styles.accountDetails}>
                            <TextField label="Username" variant="filled" fullWidth />
                            <div className={styles.smallText}>This will be used to login from now on.</div>
                        </div>
                        <div className={styles.accountDetails}>
                            <TextField label="name@email.com" variant="filled" fullWidth />
                        </div>
                        <div className={styles.accountDetails}>
                            <TextField label="Password" variant="filled" type="password" fullWidth />
                        </div>
                        <div className={styles.accountDetails}>
                            <TextField label="Confirm Password" variant="filled" type="password" fullWidth />
                        </div>

                    </div>

                </div>

                <div className={styles.buttonGroup}>
                    <div className={styles.smallText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur eius consectetur maiores vel? Corporis commodi itaque obcaecati magni dolor.
                    </div>
                    <div className={styles.registerButton}>
                        <Button variant="contained" 
                                sx = {{fontSize: "18px", borderRadius: "4px"}}
                                disableElevation>
                            REGISTER
                        </Button>
                    </div>
                </div>
            </form>
        </PageLayout>
    )
}

export default register;