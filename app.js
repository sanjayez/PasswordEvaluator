const input = document.querySelector('.actual-form');
const output = document.querySelector('#status');

const styles = (element, disp, mgn, text, back, textClr, pad) => {
    element.style.display = disp;
    element.style.margin = mgn;
    element.textContent = text;
    element.style.background = back;
    element.style.color = textClr;
    element.style.padding = pad;
};

const handleSubmit = e => {
    e.preventDefault();
}

const update = e =>{
    e.preventDefault();

    if((e.target.value).length >= 8 ){
        styles(output,'block', 'initial 0rem', `That's a pretty strong password!!`, '#36cc36', '#fff', '1.2rem 0');
    }

    else if((e.target.value).length <= 8 && (e.target.value).length > 0){
        styles(output ,'block', 'initial 0rem', `You gotta work on your password skills!`, 'red', '#fff');
    }

    else if((e.target.value).length === 0){
        output.style.display = 'none';
    }
};

input.addEventListener('keyup', update);
input.addEventListener('submit', handleSubmit);