<?php
/* @var $this ObjekatController */
/* @var $model Objekat */

$this->breadcrumbs=array(
	'Objekats'=>array('index'),
	$model->idObjekat,
);

$this->menu=array(
	array('label'=>'List Objekat', 'url'=>array('index')),
	array('label'=>'Create Objekat', 'url'=>array('create')),
	array('label'=>'Update Objekat', 'url'=>array('update', 'id'=>$model->idObjekat)),
	array('label'=>'Delete Objekat', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->idObjekat),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Objekat', 'url'=>array('admin')),
);
?>

<h1>View Objekat #<?php echo $model->idObjekat; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'idObjekat',
		'naziv',
		'adresa',
		'grad',
		'tip',
		'opis',
	),
)); ?>
