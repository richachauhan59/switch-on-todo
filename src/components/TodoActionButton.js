import react from 'react'
import Icon from '@material-ui/core/Icon'
import TextArea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card'
import { Button } from '@material-ui/core';

class TodoActionButton extends react.Component{

    state = {
        formOpen: false,
        text:""
    }

    openForm = () => {
        this.setState({formOpen:true})
    }

    closeForm = (e) => {
        this.setState({
            formOpen:false
        })
    }

    handleInputChange = (e) => {
        this.setState({
            text:e.target.value
        })
    }

    renderAddButton = () => {
        const {list} = this.props;
        
        const buttonText = list ? "Add another List" : "Add another Button";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonBackground = list ? "rgba(0,0,0, .15)" : "inherit"

        return (
            <div 
            onClick={this.openForm}
            style={{
                ...styles.openForButtonGroup,
                opacity:buttonTextOpacity, color:buttonTextColor, backgroundColor:buttonBackground}}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const {list} = this.props;
        const placeholder = list
        ? "Enter the title"
        : "Enter the title for card"

        const buttonTitle = list ? "Add List" : "Add Card"

        return (
            <div>
                <Card
                    style={{
                        minHeight:250
                    }}
                >
                    <TextArea 
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize:"none",
                        width:"100%",
                        border:"none",
                        overflow:"hidden"
                    }}
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button varieant="contained" style={{
                        color:"white",backgroundColor: "#5aac44"
                    }}
                    >
                        {buttonTitle}
                    </Button>
                    <Icon 
                        style={{
                            marginLeft:7,
                            cursor:"pointer"
                        }}
                    >
                        close
                    </Icon>
                </div>
            </div>
        )
    }


    render(){
        return this.state.formOpen? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openForButtonGroup:{
        display:"flex",
        alignItems:"center",
        cursor:"pointer",
        borderRadius:3,
        height:36,
        width:270,
        paddingLeft:10
    },
    formButtonGroup:{
        marginTop:8,
        display:"flex",
        alignItems:"center"
    }
}

export default TodoActionButton