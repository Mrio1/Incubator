function offFormSubmit (formNode) {
    formNode.onsubmit = (e) => {
       e.preventDefault();
       formNode.reset();
       alert('Success')
    }
}

export default offFormSubmit;

