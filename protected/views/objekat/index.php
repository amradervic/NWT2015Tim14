<?php
/* @var $this ObjekatController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Objekats',
);

$this->menu=array(
	array('label'=>'Create Objekat', 'url'=>array('create')),
	array('label'=>'Manage Objekat', 'url'=>array('admin')),
);
?>

<h1>Objekats</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
