function offFormSubmit (formNode) {
    formNode.onsubmit = (e) => {
       e.preventDefault();
       formNode.reset();
       alert('Succes')
    }
}

export default offFormSubmit;

