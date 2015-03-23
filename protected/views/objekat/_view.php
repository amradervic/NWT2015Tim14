<?php
/* @var $this ObjekatController */
/* @var $data Objekat */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('idObjekat')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->idObjekat), array('view', 'id'=>$data->idObjekat)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('naziv')); ?>:</b>
	<?php echo CHtml::encode($data->naziv); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('adresa')); ?>:</b>
	<?php echo CHtml::encode($data->adresa); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('grad')); ?>:</b>
	<?php echo CHtml::encode($data->grad); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('tip')); ?>:</b>
	<?php echo CHtml::encode($data->tip); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('opis')); ?>:</b>
	<?php echo CHtml::encode($data->opis); ?>
	<br />


</div>