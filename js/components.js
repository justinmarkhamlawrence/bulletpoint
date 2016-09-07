import React from 'react';

class Hello extends React.Component { render() {
return (
<h1>Hello World</h1>
);

};
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Hello />, document.getElementById('helloComp'));
});
}
