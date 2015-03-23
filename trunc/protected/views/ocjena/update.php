<?php
/* @var $this OcjenaController */
/* @var $model Ocjena */

$this->breadcrumbs=array(
	'Ocjenas'=>array('index'),
	$model->idOcjena=>array('view','id'=>$model->idOcjena),
	'Update',
);

$this->menu=array(
	array('label'=>'List Ocjena', 'url'=>array('index')),
	array('label'=>'Create Ocjena', 'url'=>array('create')),
	array('label'=>'View Ocjena', 'url'=>array('view', 'id'=>$model->idOcjena)),
	array('label'=>'Manage Ocjena', 'url'=>array('admin')),
);
?>

<h1>Update Ocjena <?php echo $model->idOcjena; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>