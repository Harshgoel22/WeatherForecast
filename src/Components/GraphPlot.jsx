import Plot from 'react-plotly.js';

function GraphPlot(props){
    return (
        <Plot
          data={[
            {
              x: props.x,
              y: props.y,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
            {type: 'bar', x: props.x, y: props.y},
          ]}
          layout={ {width: 1550, height: 350, title: `Hourwise Analysis`} }
        />
    );
}

export default GraphPlot;