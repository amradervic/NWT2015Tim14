<?php
/* @var $this RecenzijaController */
/* @var $model Recenzija */

$this->breadcrumbs=array(
	'Recenzijas'=>array('index'),
	$model->idRecenzija=>array('view','id'=>$model->idRecenzija),
	'Update',
);

$this->menu=array(
	array('label'=>'List Recenzija', 'url'=>array('index')),
	array('label'=>'Create Recenzija', 'url'=>array('create')),
	array('label'=>'View Recenzija', 'url'=>array('view', 'id'=>$model->idRecenzija)),
	array('label'=>'Manage Recenzija', 'url'=>array('admin')),
);
?>

<h1>Update Recenzija <?php echo $model->idRecenzija; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>