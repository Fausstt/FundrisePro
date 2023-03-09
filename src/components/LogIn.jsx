import { Box, Button, IconButton, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import "../styles/SingUp.css";
import BG from "../img/icon17.webp";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";

export default function SingUp({ open, setOpen }) {
    const [PassVisib, setPassVisib] = useState(false);
    const PassVisibAdd = () => setPassVisib(PassVisib ? false : true);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    return (
        <Modal onClose={() => setOpen(false)} open={open}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    position: "relative",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",

                    padding: "200px",

                    backgroundColor: "#0A1929",
                    backgroundImage: `url(${BG})`,

                    borderRadius: "15px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "30px",
                        transform: "scale(2)",
                    }}
                >
                    <IconButton
                        onClick={() => setOpen(false)}
                        color="primary"
                        sx={{
                            bgcolor: "#fff",
                            // position: "absolute",
                            top: "20%",
                            left: "60%",
                        }}
                        children={<Close fontSize="large" />}
                    />
                    <h3
                        style={{
                            color: "#fff",
                        }}
                    >
                        Register in FundrisePro !
                    </h3>
                    <form className="formPagen">
                        <div className="formPagen__inp">
                            <TextField
                                variant="outlined"
                                onChange={(e) => setEmail(e.target.value)}
                                value={Email}
                                color={"fild"}
                                type={"email"}
                                label={"Email"}
                                required
                                sx={{
                                    borderRadius: "5px",
                                    bgcolor: "#fff",
                                }}
                            />
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                }}
                            >
                                <TextField
                                    variant="outlined"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={Password}
                                    color={"fild"}
                                    type={PassVisib ? "text" : "password"}
                                    label={"Password"}
                                    required
                                    fullWidth
                                    sx={{
                                        borderRadius: "5px",
                                        bgcolor: "#fff",
                                    }}
                                />
                                <IconButton
                                    onClick={PassVisibAdd}
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        right: "0%",
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    children={
                                        PassVisib ? (
                                            <Visibility fontSize="large" />
                                        ) : (
                                            <VisibilityOff fontSize="large" />
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="formPagen__button">
                            <Button
                                size="large"
                                variant="contained"
                                type="submit"
                                fullWidth
                            >
                                Log in
                            </Button>
                        </div>
                    </form>
                </div>
            </Box>
        </Modal>
    );
}
