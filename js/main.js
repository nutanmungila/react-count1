var React = require('react');
var TimeCount = React.createClass({

    render:function() {

        var valSec = Math.round(this.props.timeVal  / 1000);

        return(

             <p> Program isss running from: {valSec} seconds</p>

            );

        }

});
    
 var start = new Date().getTime();

 setInterval(function() {
      React.render( <TimeCount timeVal={new Date().getTime() - start}  /> , document.getElementById("div1") );
 },50);
