export default class ChartDataService {

  data = [
		{
			"id": "Node.js",
			"label": "Node.js",
			"value": 10,
			"color": "hsl(129, 70%, 50%)"
		},
		{
			"id": "HTML/CSS",
			"label": "HTML/CSS",
			"value": 20,
			"color": "hsl(296, 70%, 50%)"
		},
		{
			"id": "Javascript",
			"label": "Javascript",
			"value": 40,
			"color": "#e2c12d"
		},
		{
			"id": "Design",
			"label": "design",
			"value": 10,
			"color": "hsl(297, 70%, 50%)"
		},
		{
			"id": "Others",
			"label": "others",
			"value": 10,
			"color": "hsl(2, 70%, 50%)"
		}
	]

  getNivoData() {
    return this.data;
  }
}