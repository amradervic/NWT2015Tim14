<?php
/* @var $this OcjenaController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Ocjenas',
);

$this->menu=array(
	array('label'=>'Create Ocjena', 'url'=>array('create')),
	array('label'=>'Manage Ocjena', 'url'=>array('admin')),
);
?>

<h1>Ocjenas</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
